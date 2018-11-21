<p align="center">
    <img src="./cybm.png" alt="can you beat me" width="200"><br>
    <a href="https://gulpjs.com/">
        <img src="https://img.shields.io/badge/bundler-gulp-brightgreen.svg" alt="gulp">
    </a>
    <a href="#v---dependencies">
        <img src="https://img.shields.io/david/dev/expressjs/express.svg" alt="dev dependencies">
    </a>
    <a href="https://github.com/blyndusk/front-end-starter/blob/doc/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENCE">
    </a>
</p>

# Can You Beat Me

- [I - Why use this](#i---why-use-this)
- [II - Overall operation](#ii---overall-operation)
- [III - Make it work](#iii---make-it-work)
- [IV - Add new files](#iv---add-new-files)
- [V - Go further](#v---go-further)
- [VI - Dependencies](#vi---dependencies)

## I - What is it

**Can You Beat Me** is a really simple MOOC for front-end beginners made in **2 days**

Their progression is stocked in the **browser local storage**

## II - Make it work

> if you have gulp **globally installed**, just `npm i && gulp` or `yarn && gulp` at the **root** of the starter.

### 1. Install gulp in global

⚠️ - I assume that you have *already* installed **yarn** or **npm**.

- `yarn global add gulp` or `npm i -g gulp`

### 2. Install dev dependencies

- `yarn` or `npm i`

### 3. Run tasks

There are 3 things you need to know:

- you can run **just a task** just with `gulp <task>` ( `gulp scss`,`gulp assets` ).
- you can run **all tasks** **one** **time** with `gulp build`.
- you can run tasks **when a file change in real-time** with `gulp watch`.

But the best way is just `gulp`: It will create a **localhost** with **BrowerSync**, **watch** your files and **put modifications** in the browser in **real-time**.

## III - Exercices (FR)

### Easy

#### Exercice 1 - Mettre à jour un tableau d'objets

#### Exercice 2 - Afficher un message en fonction de l'âge

#### Exercice 3 - Réaliser un faux loader

### Medium

#### Exercice 1 - Générateur de taille aléatoire

#### Exercice 2 - Générateur de couleur aléatoire

#### Exercice 3 - Afficher / Cacher un menu

### Hard

#### Exercice 1 - Déplacer un personnage avec les touches du clavier

#### Exercice 2 - Changer la couleur d'un header en fonction du scroll

#### Exercice 3 - Générer une bulle de couleur et de taille aléatoire au clic