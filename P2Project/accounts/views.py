from django.contrib.auth import get_user_model
from rest_framework.generics import  RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated

from ..renderers import JPEGRenderer, PNGRenderer
