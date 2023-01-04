"""DM_Jayanti_Website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from DM_Jayanti_Pages import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="HOME"),
    path('index', views.index, name="HOME"),
    path('about-us', views.about_us, name="About US"),
    path('beyond-banking', views.beyond_banking, name="Beyond Banking"),
    path('contact', views.contact, name="Contact US"),
    path('csr', views.csr, name="CSR"),
    path('customer-stories', views.customer_stories, name="Customer Stories"),
    path('fair-practice-code', views.fair_practice_code, name="Fair Practice code"),
    path('faq', views.faq, name="FAQ"),
    path('find-your-nearest-branch', views.find_your_nearest_branch, name="Find Nearest Branch"),
    path('fixed-deposit', views.fixed_deposit, name="Fixed Deposit"),
    path('gold-loan', views.gold_loan, name="Gold Loan"),
    path('grievance-redressal', views.grievance_redressal, name="Grievance Redressal"),
    path('jayant-unnati-plan', views.jayant_unnati_plan, name="KCG Unnati Plan"),
    path('loan-against-deposit', views.loan_against_deposit, name="Loan Against Deposit"),
    path('loan-calculator', views.loan_calculator, name="Loan Calculator"),
    path('mortgage-loan', views.mortgage_loan, name="Mortgage Loan"),
    path('our-philosophy', views.our_philosophy, name="Our Philosophy"),
    path('our-story', views.our_story, name="Our Story"),
    path('recurring-deposit', views.recurring_deposit, name="Recurring Deposit"),
    path('regulatory-disclosures', views.regulatory_disclousers, name="Regulatory Disclousers"),
    path('savings-account', views.savings_accounts, name="Savings Accounts"),
    path('terms-and-policies', views.terms_and_policies, name="Terms & Policies"),
    path('communication-archives', views.communication_archives, name="Communication Archives"),
    path('careers', views.careers, name="Careers"),
    path('disclaimer', views.disclaimer, name="Disclaimer"),
    path('financial-literacy-week-2021', views.financial_literacy_week_2021, name="Financial Literacy Week 202"),
    path('events', views.events, name="Events"),
    path('forms', views.forms, name="Forms"),
    path('important-notices', views.important_notices, name="Important Notices"),
    path('privacy-policy', views.privacy_policy, name="Privacy Policy"),
    path('rates-and-charges', views.rates_and_charges, name="Rates & Charges"),
    path('rbi-advisory-notifications', views.rbi_advisory_notifications, name="RBI Advisory Notifications"),
    path('services-for-differently-abled', views.services_for_differently_abled, name="Services For Differently Abled"),
    path('gallery', views.gallery, name="Gallery"),
]
