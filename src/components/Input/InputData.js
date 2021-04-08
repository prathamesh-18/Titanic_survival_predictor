import React,{useState} from 'react'
import axios from 'axios'
import {
  Paper,
  Grid,
  TextField,

  Button,
} from "@material-ui/core";
import useStyles from './styles'
function InputData() {
  const classes = useStyles();
    const [code1,setcode1]=useState("default")
    const [code2,setcode2]=useState("default")
    const [userData, setuserData] = useState({
        pid:"2",
        Survived:"1",
        Pclass:"0",
        Name:"1",
        Sex:"38",
        Age:"1",
        Sibsp:"0",
        Parch:"71",
        Ticket:"0",
        Fare:"1",
        Cabin:"0"
    })
    const handleChange=(event)=>{
        setuserData({...userData,[event.target.name]: event.target.value})
        // console.log(userData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/test",userData)
        .then(res=>{
            setcode1("default")
            setcode2("default")
            console.log(res.data)
            if (res.data===1){
                setcode1("primary")
            }
            else{
              setcode2("primary")
            }

            })
        .catch(err=>{
            console.log(err);
        })  
    }
    return (
        <div>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} >
                    <h2>Fill the form to Predict</h2>
                    </Paper>
                  <Paper className={classes.paper}>
                  <div className={classes.root}>
                    
                    <div className={classes.root1}>
                      <form onSubmit={handleSubmit}>
                      <TextField
                        name="pid" type='text' value={userData.pid} onChange={handleChange}
                        label="Pid"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Survived" type='text' value={userData.Survived} onChange={handleChange}
                        label="Survived"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Pclass" type='text' value={userData.Pclass} onChange={handleChange}
                        label="Pclass"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Name" type='text' value={userData.Name} onChange={handleChange}
                        label="Name"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Sex" type='text' value={userData.Sex} onChange={handleChange}
                        label="Sex"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Age" type='text' value={userData.Age} onChange={handleChange}
                        label="Age"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Sibsp"type='text' value={userData.Sibsp} onChange={handleChange}
                        label="Sibsp"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Parch" type='text' value={userData.Parch} onChange={handleChange}
                        label="Parch"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Ticket" type='text' value={userData.Ticket} onChange={handleChange}
                        label="Ticket"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Fare" type='text' value={userData.Fare} onChange={handleChange}
                        label="Fare"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        name="Cabin" type='text' value={userData.Cabin} onChange={handleChange}
                        label="Cabin"
                        style={{ margin: 8 }}
                        helperText=""
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    <br></br>
                    <Button
                      variant="contained"
                      style={{ margin: 8 }}
                      size="large"
                      color="secondary"
                      type="submit"
                    >
                      Predict
                    </Button>
                    </form>
                    </div>                    
                  </div>
                  </Paper>
                </Grid>
                

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      style={{ margin: 8 }}
                      size="large"
                      color={code1}
                    >
                      Passenger Survived
                    </Button>
                    <Button
                      variant="contained"
                      style={{ margin: 8 }}
                      color={code2}
                      size="large"
                    >
                      Passenger Did not survived
                    </Button>
                  </Grid>

                  </Grid>

        </div>
    )
}

export default InputData
