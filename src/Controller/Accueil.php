<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Asset\Package;

class Accueil extends Controller



{
         /**
         * @Route("/accueil")
         */
        public function showAccueil()
    {

        return $this->render('Accueil.html.twig');
        
    }
}

