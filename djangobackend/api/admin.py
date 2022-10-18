from django.contrib import admin
from .models import Student
@admin.register(Student)
# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display=['id','stuname','email']