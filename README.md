In our PHP course project, our group will develop an inventory manager application tailored for medium and small businesses. This application will enable clients to effectively manage their inventory, track stock levels, handle client orders, and gain valuable insights through data analytics. To achieve this, we will utilize the Laravel framework with Inertia for the frontend, integrating React.js to connect with the API we'll be developing.
Website Pages:
1.	Login/Create User:
•	Users can either log in or create a new account to access the application.
2.	Dashboard:
•	Upon successful login, users will be presented with a comprehensive dashboard showcasing various relevant components.
3.	Products:
•	Users can view a list of products along with their corresponding inventory quantities.
•	Users have the ability to add, edit, or delete products from the inventory.
•	Users can also navigate to the invoices/list page to view invoices related to a specific product.
4.	Providers:
•	Users can access a list of providers from whom the business has purchased products.
•	Users have the option to add, edit, or delete providers from the list.
•	Users can also visit the invoices/list page to view invoices associated with a particular provider.
5.	Clients:
•	This page displays a list of clients and their relevant information.
•	Users can add, edit, or delete client records, as necessary.
•	Users can also navigate to the invoices/list page to view invoices for a selected client.
6.	Invoices:
•	This page allows users to create new invoices for client purchases or business purchases from providers.
7.	Invoices/list:
•	Users can filter and view a list of invoices based on different criteria.
•	This functionality remains consistent across product, client, and provider pages.





Database Structure (Tables):
1.	Users:
•	This table stores user information, including names, email addresses, passwords, and other relevant details.
•	It facilitates user authentication and login functionality.
2.	Clients:
•	This table stores comprehensive information about clients who make purchases.
•	It encompasses all relevant data regarding clients and their interactions with the business.
3.	Providers:
•	This table stores information about providers who supply items to the business.
4.	Inventory:
•	This table tracks the items present in the business inventory.
•	It includes data such as unit prices, total item count, sold items count, items purchased from providers, and missing items.
5.	Clients Invoices:
•	This table records purchases made by clients and included details such as client ID, item ID, quantity, total price, and date.
6.	Business Invoices:
•	This table captures items purchased by the business from providers.
•	It stores data such as sale prices and purchase dates.

By implementing these pages and database tables, our inventory manager application will empower businesses to efficiently handle their inventory, streamline order management, and gain valuable insights into their operations.
![image](https://github.com/azinre/Inventory-Manager/assets/66428866/76145cde-2e0d-4d77-adfc-9962df977d88)
