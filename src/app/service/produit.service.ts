import { Injectable } from '@angular/core';
import { Commentaire } from '../model/commentaire';
import { Produit } from '../model/produit';


@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor() {}
  comment1: Commentaire = {
    nom: 'Ali ',
    message: 'Produit de bonne qualité',
  };
  comment2: Commentaire = {
    nom: 'Aziz',
    message: 'Très satisfait, livraison rapide !',
  };
  comment3: Commentaire = {
    nom: 'Salma',
    message: 'Bon produit!',
  };
  comment4: Commentaire = {
    nom: 'Nour',
    message: 'Je recommende vivement!',
  };

  private produits: Produit[] = [
    new Produit(
      '1',
      'DELL Vostro 3530',
      'https://www.tunisianet.com.tn/367398-home/pc-portable-dell-vostro-3530-i3-1305u-12-go-noir.jpg',
      1119,
      true,
      new Date('2024-01-15'),
      [this.comment1, this.comment2],
      'Pc',
      'Écran 15,6" FHD, 120Hz - Processeur Processeur Intel Core i3-1305U, 13e génération, up to 4.5 GHz, 10 Mo de mémoire Cache - Mémoire 8 Go - Disque SSD 256 Go M.2, PCIe NVMe - Carte Graphique Intel UHD graphics - Webcam - WiFi - Bluetooth - USB 3.2 Type-A - USB 3.2 Type-C - 1 Prise casque - 1x HDMI 1.4 - 1x RJ-45 - Lecteur de carte SD - Windows 11 - Couleur Noir - Garantie 1 an Avec SACOCHE Offerte'
    ),
    new Produit(
      '2',
      'Carte Mère Gigabyte X570S GAMING X',
      'https://www.tunisianet.com.tn/366190-home/carte-mere-gigabyte-x570s-gaming-x-am4.jpg',
      759,
      true,
      new Date('2024-01-15'),
      [this.comment3],
      'Composant informatique',
      'Carte Mère Gigabyte X570S GAMING X avec prise en charge du socket AM4 pour une compatibilité étendue avec les processeurs AMD.'
    ),
    new Produit(
      '3',
      'Pc Portable Lenovo V15 G4 AMN',
      'https://www.cyberinfo.tn/9712-large_default/pc-portable-lenovo-v15-g4-amn-amd-ryzen-5-8go-512go-ssd-noir.jpg',
      725,
      true,
      new Date('2024-01-15'),
      [this.comment4],
      'Pc',
      'Processeur AMD Athlon Silver 7120U, up to 3.5 Ghz, 3 Mo de cache - Mémoire 8 Go LPDDR5-4800 MHz - Disque SSD 256 Go M.2 PCIe 4.0 NVMe - Carte Graphique AMD Radeon 610M - 2x Haut-parleurs 1.5W - Caméra HD 720p avec obturateur de confidentialité - Wi-Fi  - Bluetooth 5.1 - 2x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x Ethernet (RJ-45) - 1x Jack (3.5 mm) - Couleur Noir - WINDOWS 11 PRO - Garantie 1 an.'
    ),
    new Produit(
      '4',
      'CHARGEUR POUR PC PORTABLE MSI',
      'https://www.tunisianet.com.tn/367030-home/chargeur-msi-20v-9a-noir.jpg',
      299,
      true,
      new Date('2024-01-15'),
      [this.comment3],
      'Accessoires et périphériques',
      "CHARGEUR POUR PC PORTABLE MSI de 20V et 9A, compatible avec différents modèles d'ordinateurs portables MSI."
    ),
    new Produit(
      '5',
      'Pc Portable ASUS VivoBook',
      'https://www.tunisianet.com.tn/370574-home/pc-portable-asus-vivobook-16-x1605va-i5-13500h-12-go-512-go-ssd.jpg',
      815,
      true,
      new Date('2024-01-15'),
      [this.comment2],
      'Pc',
      'Écran Full HD 15.6" (1920 x 1080 px ) antireflet.'
    ),
    new Produit(
      '6',
      'Pc Portable Lenovo V15 G5 AMN',
      'https://www.cyberinfo.tn/9714-large_default/pc-portable-lenovo-v15-g4-amn-amd-ryzen-5-8go-512go-ssd-noir.jpg',
      900,
      true,
      new Date('2024-01-15'),
      [this.comment2],
      'Pc',
      'Processeur AMD Athlon Silver 7120U, up to 3.5 Ghz, 3 Mo de cache - Mémoire 8 Go LPDDR5-4800 MHz - Disque SSD 256 Go M.2 PCIe 4.0 NVMe - Carte Graphique AMD Radeon 610M - 2x Haut-parleurs 1.5W - Caméra HD 720p avec obturateur de confidentialité - Wi-Fi  - Bluetooth 5.1 - 2x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x Ethernet (RJ-45) - 1x Jack (3.5 mm) - Couleur Noir - WINDOWS 11 PRO - Garantie 1 an'
    ),
    new Produit(
      '7',
      'SUPPORT ERGONOMIQUE',
      'https://www.tunisianet.com.tn/351101-home/support-ergonomique-reglable-pour-ordinateur-portable-wiwu-s700-argent.jpg',
      199,
      true,
      new Date('2024-01-15'),
      [this.comment1],
      'Accessoires et périphériques',
      "SUPPORT ERGONOMIQUE RÉGLABLE POUR ORDINATEUR PORTABLE WIWU S700 en couleur argentée, offrant un confort optimal pour une utilisation prolongée de l'ordinateur portable."
    ),
    new Produit(
      '8',
      'Carte PCI Express série 2',
      'https://www.tunisianet.com.tn/169837-home/carte-pci-express-serie-2-ports.jpg',
      119,
      true,
      new Date('2024-01-15'),
      [this.comment1, this.comment3],
      'Composant informatique',
      'Carte PCI Express Série 2 Ports pour ajouter des ports série à votre ordinateur et étendre sa connectivité.'
    ),
    new Produit(
      '9',
      'Carte mére ASUS PRIME B650M-K',
      'https://www.tunisianet.com.tn/369316-home/carte-mere-asus-prime-b650m-a-ii.jpg',
      439,
      true,
      new Date('2024-01-15'),
      [this.comment1, this.comment3],
      'Composant informatique',
      'Carte mère ASUS PRIME B650M-K avec des caractéristiques avancées pour une performance optimale.'
    ),
    new Produit(
      '10',
      'Pc Portable Thomson N14I310',
      'https://www.tunisianet.com.tn/345763-large/pc-portable-thomson-n14i310-i3-10110u-8-go-256-go-ssd-windows-11.jpg',
      799,
      true,
      new Date('2024-01-15'),
      [this.comment1, this.comment3],
      'Pc',
      "Processeur Intel Core i3-10110U, ( jusqu'à 4,10 GHz, 4 Mo de mémoire cache) - Mémoire 8 Go - Disque SSD 256 Go - Graphiques Intel UHD Graphics - Webcam - Wi-Fi - Bluetooth 4.2 - 1x Micro-SD Card - 1x USB 3.0 - 1x USB 2.0 - 1x Mini HDMI - 1x 3.5 mm stereo jack - Windows 11 - Couleur Noir - Garantie 1 an"
    ),
  ];
  getProduits() {
    return this.produits;
  }
}