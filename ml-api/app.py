from flask import Flask,request
import joblib
import pickle
import numpy as np
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
model2=joblib.load("review.pkl")

model=joblib.load("startup.pkl")

loaded_model=pickle.load(open("finalized_model.sav","rb"))

@app.route("/success",methods=['POST','GET'])
def isdbstartups():
    data=request.form

    if request.method=='POST':
        company_Age=int(data['company_age'])
        founder_Exp=int(data['founder_Exp'])
        founder_age=int(data['founder_age'])
        founder_school=int(data['founder_school'])
        funding=int(data['funding'])
        predict=str(model.predict([[company_Age,founder_Exp,founder_age,founder_school,funding]]))
        return {"predict":predict[1]}
    else :
        return 0

@app.route("/review",methods=['POST','GET'])
def reviews():
    data=request.form

    if request.method=='POST':
        text=data.getlist("text")
        result=[]
        positive=0
        negative=0
        for x in text:
            predict2=str(model2.predict([x])[0])
            result.append(predict2)
    size=len(result)
    for check in result:
        if check=='positive':
            positive+=1
        if check =='negative':
            negative+=1
    positive_percentage=positive/size*100
    negative_percentage=negative/size*100
    return {"review":result,"positive_percentage":positive_percentage,"negatie_percentage":negative_percentage}
    
   


loaded_model=pickle.load(open("finalized_model.sav","rb"))

@app.route("/loan",methods=['GET','POST'])
def home():
    new=''
    if request.method=='POST':
         
        int_features = [float(x) for x in request.form.values()]
        final_features =[np.array(int_features)]
        #final_features=final_features.reshape(1,-1)
        prediction=loaded_model.predict(final_features)
     
        
        if prediction==1:
           new='Your loan application is selected'
        else:
           new='Your loan application is not selected'

    return {"Prediction":new}

@app.route('/profit',methods=['GET','POST'])

def predict():
    if request.method=='POST':
        try:
            NewYork=float(request.form['NewYork'])
            California=float(request.form['California'])
            Florida=float(request.form['Florida'])
            RnDSpend=float(request.form['RnDSpend'])
            AdminSpend=float(request.form['AdminSpend'])
            MarketSpend=float(request.form['MarketSpend'])
            pred_args=[NewYork,California,Florida,RnDSpend,AdminSpend,MarketSpend]
            pred_args_arr=np.array(pred_args)
            pred_args_arr=pred_args_arr.reshape(1,-1)
            mul_reg=open("ML\ML/multiple_linear_model.pkl","rb")
            ml_model=joblib.load(mul_reg)
            model_prediction=ml_model.predict(pred_args_arr)
            model_prediction=round(float(model_prediction),2)

            



        except ValueError:
            return "Please check if the values are entered correctly"

    return {'prediction':model_prediction}



if __name__=="__main__":
    app.run(debug=True)
