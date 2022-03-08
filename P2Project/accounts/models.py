from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser
from django.conf import settings
import os
from P2Project.settings import MEDIA_ROOT
class User(AbstractUser):
    photo = models.ImageField(null=True)
    number = PhoneNumberField(blank=True, null=True)

    def save(self, *args, **kwargs):
        try:
            this = User.objects.get(id=self.id)
            if this.photo != self.photo:
                file_path = os.path.join(MEDIA_ROOT, this.photo.name)
                os.remove(file_path)
                this.photo.delete(save=False)
        except Exception as e:
            print(e) 
             # when new photo then we do nothing, normal case          
        super(User, self).save(*args, **kwargs)
