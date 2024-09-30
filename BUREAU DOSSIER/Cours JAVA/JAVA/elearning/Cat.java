import java.util.StringTokenizer;
import mypackage.Player ;
public class Cat {
    private String mName ;
    public String getName(){
        return this.mName ;
    }
    public void setName(String name){
        this.mName = name ;
    }
    private int mAge ;
    public Cat(String name, int age){
        this.mName = name ;
        this.mAge = age ;
        /* int tab[]
         * int tab = {1,2,3}
         * int tab [] = new int[3]
         * int[] tab = new int[]{1,2,3};
         */
        int[] tab = new int[]{1,2,3};

        for (int el : tab){
            System.out.println(el);
        }

        // tableau a deux dimension
        //int[][] tab = new int[2][3]
        int[][]tab1 = {
            {1,2,3},
            {4,5,6}
        };
        for(int i =0; i<tab1.length; ++i){
            for(int j = 0; j<tab1[i].length;++j){
                System.out.println(tab1[i][j]);
            }
        }
        for(int[] i: tab1){
            for(int n : i){
                System.out.println(n);
            }
        }
        System.out.println("je suis un chat : "+this.mName+" - "+this.mAge+ tab);

        String s = "bonjour'" ;
        String s1 = "tout le monde";
        /*
         *  concat()
         * length()
         * toUpperCase(), toLowerCase(),trim(), replace("a"=>"o")
         * charAt(index) recypere le N du tab de la chaine 
         * substring(index ,nb) extraction de chaine
         */
        //verifie si meme
           s.equals(s1) ;// s.compareTo(s2)
        System.out.println(s.concat(" ").concat(s1));

        String sa = "news/titre" ;
        StringTokenizer st = new StringTokenizer(sa, "/");
        while(st.hasMoreTokens()){
            System.out.println(st.nextToken());
        }
        /*
         * StringBuilder / StringBuffer
         * length(), capacity()
         * append(), iunsert(index,'str')
         */
        StringBuilder sb = new StringBuilder();
        System.out.println(sb.length());
        System.out.println(sb.capacity());

        sb.append("bonjour");
        System.out.println(sb);
        sb.append("tout le monde ");
        sb.insert(0,"bonjour '");
        System.out.println(sb);
        /*
            string builder(asynchrone)
         * monothreade : 1 seul thread(une seul route)
         * 
         * stringbuffer(synchronisé, thread-safe)
         * multithreading : plusieur threads (plusieur route)
         */
        Player p = new Player();
    }

}
