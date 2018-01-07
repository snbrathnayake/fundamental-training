public class Basic {

   /* This is my first java program.
    * This will print 'Hello World' as the output
    * This is an example of multi-line comments.
    */

   private final static String COMPANY_NAME = "dynamic.pvt.ltd";
   
   public static void main(String []args) {
      // This is an example of single line comment
      /* This is also an example of single line comment. */
      System.out.println("Hello "+ getCompanyName());
   }

   
   public static getCompanyName(){
	   return COMPANY_NAME;
   }
}
