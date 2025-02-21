import fs from "fs";
import path from "path";

// Function to wait until JS files exist
function waitForAssets() {
  const distAssetsPath = "dist/assets/";
  let retries = 5;

  return new Promise((resolve, reject) => {
    const checkFiles = setInterval(() => {
      if (fs.existsSync(distAssetsPath)) {
        const jsFiles = fs.readdirSync(distAssetsPath).filter((file) => file.endsWith(".js"));
        if (jsFiles.length > 0) {
          clearInterval(checkFiles);
          resolve(jsFiles);
        }
      }

      retries -= 1;
      if (retries <= 0) {
        clearInterval(checkFiles);
        reject(new Error("❌ No JavaScript file found in `dist/assets/`. Ensure `vite build` ran successfully."));
      }
    }, 1000);
  });
}

// Load participant names
const participants = JSON.parse(fs.readFileSync("./participants.json", "utf-8"));

// Define all static pages
const staticPages = ["index", "vision", "program", "maps", "blog", ...participants.map((id) => `participants/${id}`)];

waitForAssets()
  .then((jsFiles) => {
    // ✅ Find the correct built JavaScript file
    const mainJsFile = jsFiles.find((file) => file.startsWith("main-"));

    if (!mainJsFile) {
      throw new Error("❌ No valid JavaScript file found.");
    }

    // ✅ Use `/wedding/assets/...` for GitHub Pages
    const scriptPath = `/wedding/assets/${mainJsFile}`;
    console.log(`🔹 Using script: ${scriptPath}`);

    // ✅ Update `dist/script.js` to load the correct JavaScript file
    fs.writeFileSync("dist/script.js", `import "${scriptPath}";`);
    console.log("✅ Updated: dist/script.js");

    // ✅ Generate static pages
    staticPages.forEach((page) => {
      const dir = `dist/${page}`;
      fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(`${dir}/index.html`, fs.readFileSync("dist/index.html", "utf-8"));
      console.log(`✅ Created: ${dir}/index.html`);
    });

    console.log("🎉 All static pages generated with correct script paths!");
  })
  .catch((error) => {
    console.error(error.message);
  });
