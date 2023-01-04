from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'index.html')

def about_us(request):
    return render(request,'about_us.html')

def beyond_banking(request):
    return render(request,'beyond_banking.html')

def contact(request):
    return render(request,'contact.html')

def csr(request):
    return render(request,'csr.html')

def careers(request):
    return render(request,'careers.html')

def disclaimer(request):
    return render(request,'disclaimer.html')

def events(request):
    return render(request,'events.html')

def forms(request):
    return render(request,'forms.html')

def gallery(request):
    return render(request,'gallery.html')

def rates_and_charges(request):
    return render(request,'rates_and_charges.html')

def communication_archives(request):
    return render(request,'communication_archives.html')

def privacy_policy(request):
    return render(request,'privacy_policy.html')

def rbi_advisory_notifications(request):
    return render(request,'rbi_advisory_notifications.html')

def services_for_differently_abled(request):
    return render(request,'services_for_differently_abled.html')

def important_notices(request):
    return render(request,'important_notices.html')

def financial_literacy_week_2021(request):
    return render(request,'financial_literacy_week_2021.html')

def customer_stories(request):
    return render(request,'customer_stories.html')

def fair_practice_code(request):
    return render(request,'fair_practice_code.html')

def faq(request):
    return render(request,'faq.html')

def find_your_nearest_branch(request):
    return render(request,'find_your_nearest_branch.html')

def fixed_deposit(request):
    return render(request,'fixed_deposit.html')

def gold_loan(request):
    return render(request,'gold_loan.html')

def grievance_redressal(request):
    return render(request,'grievance_redressal.html')

def jayant_unnati_plan(request):
    return render(request,'jayant_unnati_plan.html')

def loan_against_deposit(request):
    return render(request,'loan_against_deposit.html')

def loan_calculator(request):
    return render(request,'loan_calculator.html')

def mortgage_loan(request):
    return render(request,'mortgage_loan.html')

def our_philosophy(request):
    return render(request,'our_philosophy.html')

def our_story(request):
    return render(request,'our_story.html')

def recurring_deposit(request):
    return render(request,'recurring_deposit.html')

def regulatory_disclousers(request):
    return render(request,'regulatory_disclousers.html')

def savings_accounts(request):
    return render(request,'savings_accounts.html')

def terms_and_policies(request):
    return render(request,'terms_and_policies.html')
