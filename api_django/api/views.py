from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

# Create your views here.
class CompanyListView(View):
    def get(self, request):
        #
        list = Company.objets.all()
        return JsonResponse(list, False)

    def post(self, request):
        #
        return ""
    def put(self, request):
        #
        return ""
    def delete(self, request):
        #
        return ""

class CompanyDetailView(View):
    def get(self, request, id):
        #
        list = Company.objets.all()
        return JsonResponse(list, False)

    def post(self, request):
        #
        return ""
    def put(self, request):
        #
        return ""
    def delete(self, request):
        #
        return ""
