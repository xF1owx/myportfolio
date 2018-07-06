<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Asset\Package;

class Home extends Controller



{
         /**
         * @Route("/home")
         */
        public function showHome()
    {

        return $this->render('Home.html.twig');
        
    }
}