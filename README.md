# QCP-Dynamic-Drawer
 Dynamic Quote Line Drawer (per product)

QCP allows for dynamic capabilities of drawer functionality on a per product basis.

Steps:
1) Add field to Global Picklists (HiddenDrawerFields__c)
2) Create and map Global Picklist to fields that exist on Quote Line and Product object. (More__c)
3) Add fields to the Quote Line Drawer Field Set to include those fields in the drawer.
4) Add values to the Global Picklist that map back to the API names of fields you want to hide.
5) Once added, add values to the Product record that correspond to the APIs (fields) you would like to HIDE from the QLE Product specific Drawer.
6) Use QLE to test functionality and observe drawer based on products in cart.