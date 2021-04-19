import pymongo

url = "mongodb://127.0.0.1:27017/"
Client = pymongo.MongoClient(url)
Database = Client['mehouse']
products = Database['products']

name = str(input("Ten san pham: "))
image = str(input("Link anh: "))
description = str(input("Mo ta: "))
color = str(input("Mau: "))
price = float(input("Gia "))


insert = products.insert_one(
    {"product_name": name, "product_image": image, "product_description": description, "product_color": color, "product_price": price})

if (insert.inserted_id):
    print("Insert successfully.")
else:
    print("Error! Try again.")
