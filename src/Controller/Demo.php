<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Asset\Package;

class Demo extends Controller



{
         /**
         * @Route("/demo")
         */
        public function showDemo()
    {

        return $this->render('Demo.html.twig');
        
    }
}