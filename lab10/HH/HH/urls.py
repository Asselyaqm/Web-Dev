"""HeadHunter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies', CompaniesList.as_view()),
    path('api/companies/<int:company_id>', company),
    path('api/companies/<int:company_id>/vacancies', get_company_vacancies),
    path('api/vacancies', VacanciesList.as_view()),
    path('api/vacancies/<int:vacancy_id>', vacancy),
    path('api/vacancies/top_ten', get_top10_vacancies),
    path('api/login/', obtain_jwt_token)
]
