<?php

namespace App\Controller;

use App\Entity\Client;
use App\Repository\ClientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ClientController extends AbstractController
{
    #[Route('/api/client', name: 'api_client_index', methods: 'GET')]
    public function index(ClientRepository $clientRepository)
    {
        // $clients = $clientRepository->findAll();

        // $json = json_encode($clients);

        // dd($json);

        // return $this->render('default/index.html.twig', [
        //     'controller_name' => 'Xav',
        // ]);

        return $this->json($clientRepository->findAll(), 200,[], ['groups' => 'client:read']);
    }

    // /**
    //  * @Route("api/clients", name="clients", methods={"GET"})
    //  * @return \Symfony\Component\HttpFoundation\JsonResponse
    //  */
    // public function getClients()
    // {
    //     $clients = [
    //         [
    //             'id' => 1,
    //             'name' => 'ducontroller',
    //             'firstname' => 'Lorem ipsum',
    //             'email' => 'lorem@ipsum.com',
    //             'adress' => '10 lorem impsum 51000 Reims',
    //             'phone' => '06-06-06-06-06'
    //         ],
    //         [
    //             'id' => 2,
    //             'name' => 'Olususi Oluyemi2',
    //             'firstname' => 'Lorem ipsum2',
    //             'email' => 'lorem@ipsum.com2',
    //             'adress' => '12 lorem impsum 51000 Reims',
    //             'phone' => '06-06-06-06-07'
    //         ],
    //         [
    //             'id' => 3,
    //             'name' => 'Olususi Oluyemi3',
    //             'firstname' => 'Lorem ipsum3',
    //             'email' => 'lorem@ipsum.com3',
    //             'adress' => '13 lorem impsum 51000 Reims',
    //             'phone' => '06-06-06-06-08'
    //         ],
    //         [
    //             'id' => 4,
    //             'name' => 'Olususi Oluyemi2',
    //             'firstname' => 'Lorem ipsum2',
    //             'email' => 'lorem@ipsum.com2',
    //             'adress' => '12 lorem impsum 51000 Reims',
    //             'phone' => '06-06-06-06-07'
    //         ],
    //         [
    //             'id' => 5,
    //             'name' => 'Olususi Oluyemi3',
    //             'firstname' => 'Lorem ipsum3',
    //             'email' => 'lorem@ipsum.com3',
    //             'adress' => '13 lorem impsum 51000 Reims',
    //             'phone' => '06-06-06-06-08'
    //         ],
    //     ];
    
    //     $response = new Response();

    //     $response->headers->set('Content-Type', 'application/json');
    //     $response->headers->set('Access-Control-Allow-Origin', '*');

    //     $response->setContent(json_encode($clients));
        
    //     return $response;
    // }

    #[Route('/api/client/delete/{id}', name: 'api_client_delete', methods: ['DELETE'])]
    public function deleteClient(
        Request $request,
        Client $client,
        EntityManagerInterface $entityManager,
    ): Response {

        $entityManager->remove($client);
        $entityManager->flush();

        $response = new Response();
        $response->setStatusCode(200);

        return $response;
    }

    #[Route('/client/{id}', name: 'client_show', methods: ['GET'])]
    public function showClient(
        Client $client,
    ): Response {

        return $this->json($client, 200,[], ['groups' => 'client:read']);
    }
}