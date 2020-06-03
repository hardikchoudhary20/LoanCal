console.log('1')
//for submit (calculate)
document.getElementById('loan-form').addEventListener('submit',function(e){
    
    //hide results
    document.getElementById('result').style.display = 'none';
    
    
    //show loader
    document.getElementById('loading').style.display= 'block';

    setTimeout(calculateresult,2000);


    
    
    
    e.preventDefault();



});

function calculateresult(){
   

    const UIamount = document.getElementById('amount');
    const UIInterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlypayment = document.getElementById('monthlypayment');
    const UItotalPayment = document.getElementById('totalpayment');
    const UItotalinterest = document.getElementById('totalinterest');

    const principle = parseFloat(UIamount.value);
    const calInterest = parseFloat(UIInterest.value)/100/12;
    const calPayments = parseFloat(UIyears.value)*12;

    //monthly 
    const x = Math.pow(1 + calInterest,calPayments);
    const monthly = (principle * x *calInterest)/(x-1);

    if(isFinite(monthly) && monthly > 0 && x>0 && calInterest >0 && calPayments>0 &&principle > 0 )
    {
        UImonthlypayment.value = monthly.toFixed(2);
        UItotalPayment.value =(monthly*calPayments).toFixed(2);
        UItotalinterest.value = ((monthly*calPayments)-principle).toFixed(2);
        document.getElementById('result').style.display = 'block';
        document.getElementById('loading').style.display= 'none';
    }
    else if(monthly <0 || x < 0 || calPayments <0 || principle <0 || UIInterest < 0 || UIamount < 0 || UItotalPayment <0 || UIyears <0 )
    {
        showError('Please check your numbers')

    }
    
else{
    showError('Please check your numbers')
}



function  showError(error){
     
    //hide results
    document.getElementById('result').style.display = 'none';
    
    
    //show loader
    document.getElementById('loading').style.display= 'none';

    const errorDiv = document.createElement('div');

    //get element 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = "alert alert-danger";
    //create text nodee and append to div
    errorDiv.appendChild(document.createTextNode(error));


    //
    card.insertBefore(errorDiv,heading);
    //clear eror after 2.5 seconds
    setTimeout(clearError,2500)
}
function clearError(){
    document.querySelector('.alert').remove();
}