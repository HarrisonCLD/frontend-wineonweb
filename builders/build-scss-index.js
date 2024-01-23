import { promises } from "fs";
const { readdir, stat, readFile, writeFile } = promises;
import { join } from "path";

const dossierSource = "./src/components";
const nomRecherche = ".scss";
const fichierDestination = "./src/scss/index.scss";
const baliseSpeciale = "// #importation#";
let increment = 0;

async function parcourirDossier(dossier) {
  const fichiers = await readdir(dossier);

  for (const fichier of fichiers) {
    const chemin = join(dossier, fichier);
    const stats = await stat(chemin);

    if (stats.isDirectory()) {
      await parcourirDossier(chemin);
    } else if (fichier.endsWith(nomRecherche)) {
      const cheminAvecBarresObliques = chemin.replace(/\\/g, "/");
      const cheminSansScss = cheminAvecBarresObliques.replace(/\.scss$/, "");
      await ajouterContenuAuFichier(
        `\n@import "../../${cheminSansScss}";`,
        baliseSpeciale
      );
      increment++;
      console.log(
        `Fichier ${increment} copié avec succès : ${cheminAvecBarresObliques}`
      );
    }
  }
}

async function ajouterContenuAuFichier(contenuAAjouter, baliseSpeciale) {
  const contenuExistant = await readFile(fichierDestination, "utf-8");

  const positionBaliseSpeciale = contenuExistant.indexOf(baliseSpeciale);

  if (positionBaliseSpeciale !== -1) {
    const positionFinBaliseSpeciale =
      positionBaliseSpeciale + baliseSpeciale.length;
    const nouveauContenu =
      contenuExistant.slice(0, positionFinBaliseSpeciale) +
      contenuAAjouter +
      contenuExistant.slice(positionFinBaliseSpeciale);
    await writeFile(fichierDestination, nouveauContenu);

    console.log(`Contenu ajouté au fichier avec succès.`);
  } else {
    console.log(
      `La balise ${baliseSpeciale} n'a pas été trouvée dans le fichier.`
    );
  }
}

async function main() {
  await parcourirDossier(dossierSource);
  console.log(
    `Processus terminé. Les fichiers ont été copiés dans ${fichierDestination}`
  );
}

main();
