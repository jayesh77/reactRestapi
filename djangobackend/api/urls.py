from django.urls import path
from api import views

urlpatterns = [
    path('student/', views.StudentList.as_view()),
    path('student/create', views.StudentCreate.as_view()),
    path('student/<int:pk>', views.StudentDetails.as_view()),
]