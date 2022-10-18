from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView,ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.
class StudentList(ListAPIView):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer

class StudentCreate(ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetails(RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
