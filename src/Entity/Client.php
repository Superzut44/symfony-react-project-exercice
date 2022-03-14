<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ClientRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ClientRepository::class)]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(["client:read"])]
    private $id;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(["client:read"])]
    private $name;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(["client:read"])]
    private $firstname;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(["client:read"])]
    private $email;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(["client:read"])]
    private $adress;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(["client:read"])]
    private $phone;

    #[ORM\OneToMany(mappedBy: 'client', targetEntity: Possession::class)]
    private $possessions;

    public function __construct()
    {
        $this->possessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * @return Collection<int, Possession>
     */
    public function getPossessions(): Collection
    {
        return $this->possessions;
    }

    public function addPossession(Possession $possession): self
    {
        if (!$this->possessions->contains($possession)) {
            $this->possessions[] = $possession;
            $possession->setClient($this);
        }

        return $this;
    }

    public function removePossession(Possession $possession): self
    {
        if ($this->possessions->removeElement($possession)) {
            // set the owning side to null (unless already changed)
            if ($possession->getClient() === $this) {
                $possession->setClient(null);
            }
        }

        return $this;
    }
}
