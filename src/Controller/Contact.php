<?php 

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Asset\Package;

class Contact extends Controller



{
         /**
         * @Route("/contact")
         */
        public function showContact()
    {

        return $this->render('Contact.html.twig');
        
    }
}


