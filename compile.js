const fs = require("fs");
const path = require("path");
const twig = require("twig");
const chokidar = require("chokidar");
const axios = require("axios");

const twigSrc = "src/templates/index.twig";
const twigOut = "dist/index.html";
const jsSrc = "src/main.js";
const jsOut = "dist/js/script.js";

async function compileTwig() {
  try {
    // Fetch posts using axios instead of fetch
    const response = await axios.get("http://localhost:4000/posts");
    const posts = response.data; // Axios automatically parses JSON

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Extract unique categoryIds
    const categoryIds = [...new Set(posts.map((post) => post.categoryId))];

    // Render template with posts data and categoryIds
    twig.renderFile(twigSrc, { posts, categoryIds }, function (err, html) {
      if (err) {
        return console.error("Twig compile error:", err);
      }

      // Vérifier si le dossier dist existe, sinon le créer
      if (!fs.existsSync(path.dirname(twigOut))) {
        fs.mkdirSync(path.dirname(twigOut), { recursive: true });
      }

      fs.writeFileSync(twigOut, html);
      console.log("✅ Twig compiled to dist/index.html");
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function compileJS() {
  // Vérifier si le dossier dist/js existe, sinon le créer
  if (!fs.existsSync(path.dirname(jsOut))) {
    fs.mkdirSync(path.dirname(jsOut), { recursive: true });
  }

  // Copier le fichier JS vers dist
  fs.copyFileSync(jsSrc, jsOut);
  console.log("✅ JS copied to dist/js/script.js");
}

// Compiler les deux
function compileAll() {
  compileTwig();
  compileJS();
}

// Si l'argument --watch est passé
if (process.argv.includes("--watch")) {
  console.log("👀 Watching files...");
  compileAll(); // compile tout au départ

  // Vider le cache Twig à chaque changement
  twig.cache(false);

  // Surveiller les fichiers Twig et JS
  const watcher = chokidar.watch(["src/templates/**/*.twig", "src/main.js"]);

  console.log(
    "Watching for changes in: src/templates/**/*.twig and src/main.js"
  );

  watcher.on("ready", () => {
    console.log("Initial scan complete. Ready for changes.");
  });

  watcher.on("change", (filePath) => {
    console.log(`🔄 File changed: ${filePath}`);
    if (filePath.endsWith(".twig")) {
      compileTwig();
    } else if (filePath.endsWith(".js")) {
      compileJS();
    }
  });
} else {
  // mode normal (pas en watch)
  compileAll();
}
