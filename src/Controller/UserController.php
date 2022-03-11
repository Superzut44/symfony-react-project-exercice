<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/users', name: 'users')]
class UserController extends AbstractController
{
    #[Route('/{reactRouting}', name: '_home', defaults: ["reactRouting" => null])]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/api", name="_api")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getUser()
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Olususi Oluyemi',
                'firstname' => 'Lorem ipsum',
                'email' => 'lorem@ipsum.com',
                'adress' => '10 lorem impsum 51000 Reims',
                'phone' => '06-06-06-06-06'
            ],
            [
                'id' => 2,
                'name' => 'Olususi Oluyemi2',
                'firstname' => 'Lorem ipsum2',
                'email' => 'lorem@ipsum.com2',
                'adress' => '12 lorem impsum 51000 Reims',
                'phone' => '06-06-06-06-07'
            ],
            [
                'id' => 3,
                'name' => 'Olususi Oluyemi3',
                'firstname' => 'Lorem ipsum3',
                'email' => 'lorem@ipsum.com3',
                'adress' => '13 lorem impsum 51000 Reims',
                'phone' => '06-06-06-06-08'
            ],
        ];
    
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($users));
        
        return $response;
    }
}
