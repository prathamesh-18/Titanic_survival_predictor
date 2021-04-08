import pickle
import numpy as np
array = [5,3,1.0,0.0,35.0,0,0,8.0500,1.0,0.0,0.0] 
#each value represents a feature present in the training set Hint: the users should be able to enter their own values/(or) select from a drop down list of values to make custom predictions
a = np.asarray(array).reshape(1,-1)

with open("C:\\Users\\USER\\Desktop\\Webtest\\Webtest\\model_pickle","rb") as f:
    mp=pickle.load(f)

x=mp.predict(a)
print(x)
