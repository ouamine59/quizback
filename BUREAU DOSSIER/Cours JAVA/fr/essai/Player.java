package fr.essai;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Player {
    private String name = "";
    /* ENCAPSULATION  */
    public String getName(){
        return this.name ;
    }
    public void setName(String n){
        this.name = n ;
    }
    /*********** */
    public  Player(){    
    }
    /*
    *    string builder(asynchrone)
    * monothreade : 1 seul thread(une seul route)
    * 
    * stringbuffer(synchronisé, thread-safe)
    * multithreading : plusieur threads (plusieur route)
    */
    /*
    * StringBuilder / StringBuffer
    * length(), capacity()
    * append(), iunsert(index,'str')
    */
    public void essaiString(){
        String a = "aaa";
        StringBuilder sb = new StringBuilder(a);
        sb.append("bbb");
        sb.insert(0,"START ");
        sb.capacity();
        int b = sb.length();
        System.out.println(sb);
    }
    public void tableau(){
        String[] tab = {"1","2","3"};
        for(String el: tab){
            this.setName(el);
            System.out.println(this.getName());
        }
    }
    /*
     * BufferedReader -> syhnchrone
     *                      thread safe
     *                      lecture de chaine de caractere(string)
     *                      tampon de 8192 caractere
     * 
     *          ->read() lire un caractere
     *          ->readLine() lire une chaine
     *          -> skip(N) ignore N cractere
     * 
     */
    public void lectureBufferedReader(){      
        try{
            InputStreamReader isr = new InputStreamReader(System.in);
            BufferedReader br = new BufferedReader(isr);
            System.out.print("quelle est ton nom ? ");
            String nom = br.readLine();
            System.out.println(nom);  
        }catch(IOException e){
            System.out.println(e.getMessage());
        }        
    }
    /* scanner -> asynchrone
     *              not thread-safe
     *              lecture de donnee + parsing
     *              tampon de 1024 caractere
     *          ->next<line(),
     *          ->nextChar(),
     *          ->nextByte(),
     *          -> nextFloat()..
      */
    public void lectureScanner(){
        /*SCanner */
        try{
            Scanner sc = new Scanner(System.in);
            System.out.println("quelle est ton niveau ? ");
            int level = sc.nextInt();
            System.out.println(level);
        }catch(InputMismatchException e){
            //e.printStackTrace();
            //e.getMessage()
            System.out.println("la date nest pas valide");
        }
        finally{
            System.out.println("ok");
        }
    }
    // import com.aspose.ocr.AsposeOCR;
// import com.aspose.ocr.License;
    public void extraireEcritureFromPhoto(){
         /*
         * 
         * 
         * Extraction ecriture photo
         */
        
        // License.setLicense("Aspose.OCR.lic");
            
        // // Create an instance of AsposeOcr class to apply OCR on an image
        // AsposeOCR TextExtractFromImage = new AsposeOCR();

        // // Read image using RecognizePage method for text extraction
        // String ExtractedTextFromImage = TextExtractFromImage.RecognizePage("ExampleOCRImageToExtractText.jpg");

    }
}
