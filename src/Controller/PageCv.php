<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Asset\Package;

class PageCv extends Controller



{
         /**
         * @Route("/pagecv")
         */
        public function showCv()
    {

        return $this->render('PageCv.html.twig');
        
    }
}

