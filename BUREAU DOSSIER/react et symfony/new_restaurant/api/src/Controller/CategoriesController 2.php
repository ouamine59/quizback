<?php namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Categorie ;
use PhpParser\Node\Expr\Cast;
use Symfony\Component\HttpFoundation\JsonResponse;
class CategoriesController extends AbstractController
{
    #[Route(path:'/admin/categories/create/{categorie}', 
    name: 'app_admin_create_categorie', methods: ['GET'])]
    /**
     * creation du token avec l'email et password de utilisateur 
     * 
     **/   
    public function createCategory(string $categorie , 
    EntityManagerInterface $manager): Response
    {  
        $newCategorie = new Categorie();
        $newCategorie->setNom($categorie);
        $newCategorie->setState(1);
        $manager->persist($newCategorie);
        $manager->flush();
        return new JsonResponse($this->json(['response'=>'1']));
    }
    
    #[Route(path:'/categories/listing', 
    name: 'app_listing_categorie', methods: ['GET'])]
    function listCategories( EntityManagerInterface $manager):response
    {
        $repository = $manager->getRepository(Categorie::class);
        $cat        = $repository->findBy(array('state'=>1));
        $r = array_map(function($c) {
            return [
                'id' => $c->getId(),
                'nom' => $c->getNom()
            ];
        }, $cat);
        return new JsonResponse(['response'=>$r]);
    }


    #[Route(path:'/categories/detail/{id}', 
    name: 'app_detail_categorie', methods: ['GET'])]
    function detailCategories(string $id , EntityManagerInterface $manager, Categorie $categorie):response
    {   
        if( $id instanceof $categorie){
            return new JsonResponse(['response'=>false]);
        }
        $cat        = $manager->getRepository(Categorie::class)->find($id);
        return new JsonResponse(['response'=>1, 'id'=>$cat->getId(), 'nom'=>$cat->getNom()]);
    }

    #[Route(path:'/admin/categories/update/{id}/{category}', 
    name: 'app_admin_update_categorie', methods: ['GET'])]
    function updateCategories(string $id ,string $category, EntityManagerInterface $manager):response
    {   
        $cat = $manager->getRepository(Categorie::class)->find($id);
        if (!$cat) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
        $cat->setNom($category);
        $manager->flush();
        $manager->persist($cat);
        return new JsonResponse(['response'=>1]);
    }

    #[Route(path:'/admin/categorie/delete/{id}', 
    name: 'app_admin_delete_categorie', methods: ['GET'])]
    function deleteCategories(string $id , EntityManagerInterface $manager, Categorie $categorie):response
    {    
        if( $id instanceof $categorie){
        return new JsonResponse(['response'=>false]);
        }
        $cat = $manager->getRepository(Categorie::class)->find($id);
        $cat->setState(false);
        $manager->flush();
        $manager->persist($cat);
        return new JsonResponse(['response'=>1]);
    }
}
