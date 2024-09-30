<?php namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class SecurityController extends AbstractController
{
    #[Route('/auth', name: 'app_login', methods: ['POST'])]
    /**
     * creation du token avec l'email et password de utilisateur 
     * 
     **/   
    public function login(#[CurrentUser] $user = null): Response
    {
        //si user non connu envoi dune erreur
        if (null === $user) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }
        $token =   'aaa' ;//$user['token'] ;  
        return $this->json([
            'path' => 'src/Controller/SecurityController.php',
            'user'  => $user->getUserIdentifier(),
            'id' => $user ? $user->getId() : null,
            'token' => $token,
        ]);
    }
}

