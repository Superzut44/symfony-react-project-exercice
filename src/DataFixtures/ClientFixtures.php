<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Client;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ClientFixtures extends Fixture
{
    public const CLIENTS = [
        [
            'name' => 'Olususi',
            'firstname' => 'Lorem',
            'email' => 'lorem@ipsum.com',
            'adress' => '11 lorem impsum 51100 Reims',
            'phone' => '01-01-01-01-01',
            'birthDate' => '1971-10-21'
        ],
        [
            'name' => 'Olususi2',
            'firstname' => 'Lorem2',
            'email' => 'lorem@ipsum.com2',
            'adress' => '12 lorem impsum 51100 Reims',
            'phone' => '02-02-02-02-02',
            'birthDate' => '1972-10-21'
        ],
        [
            'name' => 'Olususi3',
            'firstname' => 'Lorem3',
            'email' => 'lorem@ipsum.com3',
            'adress' => '13 lorem impsum 51100 Reims',
            'phone' => '03-03-03-03-03',
            'birthDate' => '1973-10-21'
        ],
        [
            'name' => 'Olususi4',
            'firstname' => 'Lorem4',
            'email' => 'lorem@ipsum.com4',
            'adress' => '14 lorem impsum 51100 Reims',
            'phone' => '04-04-04-04-04',
            'birthDate' => '1974-10-21'
        ],
        [
            'name' => 'Olususi5',
            'firstname' => 'Lorem5',
            'email' => 'lorem@ipsum.com5',
            'adress' => '15 lorem impsum 51100 Reims',
            'phone' => '05-05-05-05-05',
            'birthDate' => '1975-10-21'
        ],
        [
            'name' => 'Olususi',
            'firstname' => 'Lorem',
            'email' => 'lorem@ipsum.com',
            'adress' => '11 lorem impsum 51100 Reims',
            'phone' => '01-01-01-01-01',
            'birthDate' => '1976-10-21'
        ],
        [
            'name' => 'Olususi2',
            'firstname' => 'Lorem2',
            'email' => 'lorem@ipsum.com2',
            'adress' => '12 lorem impsum 51100 Reims',
            'phone' => '02-02-02-02-02',
            'birthDate' => '1977-10-21'
        ],
        [
            'name' => 'Olususi3',
            'firstname' => 'Lorem3',
            'email' => 'lorem@ipsum.com3',
            'adress' => '13 lorem impsum 51100 Reims',
            'phone' => '03-03-03-03-03',
            'birthDate' => '1978-10-21'
        ],
        [
            'name' => 'Olususi4',
            'firstname' => 'Lorem4',
            'email' => 'lorem@ipsum.com4',
            'adress' => '14 lorem impsum 51100 Reims',
            'phone' => '04-04-04-04-04',
            'birthDate' => '1979-10-21'
        ],
        [
            'name' => 'Olususi5',
            'firstname' => 'Lorem5',
            'email' => 'lorem@ipsum.com5',
            'adress' => '15 lorem impsum 51100 Reims',
            'phone' => '05-05-05-05-05',
            'birthDate' => '2000-10-21'
        ]
    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::CLIENTS as $key => $clientData) {
            $client = new Client();
            $client->setName($clientData['name']);
            $client->setFirstname($clientData['firstname']);
            $client->setEmail($clientData['email']);
            $client->setAdress($clientData['adress']);
            $client->setPhone($clientData['phone']);
            $client->setBirthDate(new DateTime($clientData['birthDate']));
            $this->addReference('client_' . $key, $client);

            $manager->persist($client);
        };
        $manager->flush();
    }
}