from django.db import models

class Restaurant(models.Model):
    RestaurantID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Location = models.CharField(max_length=200)

    def __str__(self):
        return self.Name

class Customer(models.Model):
    CustomerID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Contact = models.CharField(max_length=15)

    def __str__(self):
        return self.Name

class DeliveryStaff(models.Model):
    StaffID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Contact = models.CharField(max_length=15)

    def __str__(self):
        return self.Name

class Menu(models.Model):
    MenuID = models.AutoField(primary_key=True)
    RestaurantID = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    Item = models.CharField(max_length=100)

    def __str__(self):
        return self.Item

class Order(models.Model):
    OrderID = models.AutoField(primary_key=True)
    CustomerID = models.ForeignKey(Customer, on_delete=models.CASCADE)
    RestaurantID = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    DeliveryStaffID = models.ForeignKey(DeliveryStaff, on_delete=models.SET_NULL, null=True, blank=True)
    Items = models.ManyToManyField(Menu)
    OrderDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.OrderID} by {self.CustomerID.Name}"