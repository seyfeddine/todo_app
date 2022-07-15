from django.db import models

class Todo(models.Model):

    STATES = [("DONE", "Done"), ("UNDONE", "Undone")]

    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    state = models.CharField(choices=STATES, default="Undone", max_length=10)

    # To Show More Details on the Admin panel
    def __str__(self):          
        return self.name + ' ' + self.description
    