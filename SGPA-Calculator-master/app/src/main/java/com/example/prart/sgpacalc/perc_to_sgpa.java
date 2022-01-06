package com.example.prart.sgpacalc;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import static java.sql.Types.NULL;

public class perc_to_sgpa extends AppCompatActivity {

    private TextView result;
    private Button convert;
    EditText inputtext;
    Switch aSwitch;
    TextView heading,textfrom,textto;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_perc_to_sgpa);
        result = findViewById(R.id.textViewresult);
        convert = findViewById(R.id.buttonconvert);
        inputtext = findViewById(R.id.editTextinput);
        aSwitch = findViewById(R.id.switchinvert1);
        heading = findViewById(R.id.textViewheading);
        textfrom = findViewById(R.id.textViewfrom);
        textto = findViewById(R.id.textViewto);
        convert.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

               final String pcinput;
                pcinput = inputtext.getText().toString();

                if(pcinput.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Percentage cannot be empty!!",Toast.LENGTH_SHORT).show();
                    result.setText(null);
                }
                else if(Float.parseFloat(pcinput) > 100){
                    Toast.makeText(getApplicationContext(),"Percentage cannot exceed 100!!",Toast.LENGTH_SHORT).show();
                    result.setText(null);
                    inputtext.setText(null);
                }
                else {
                    float pcin;
                    pcin = Float.parseFloat(pcinput);
                    double calcresult;
                    calcresult = ((pcin/10)+0.75);
                    result.setText(String.valueOf(calcresult));
                    Toast.makeText(getApplicationContext(),"Result is ready",Toast.LENGTH_SHORT).show();
                }
            }
        });

        aSwitch.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                //Intent intent4=new Intent(getApplicationContext(),sgpa_to_perc.class);
                //startActivity(intent4);

                if(isChecked){
                    heading.setText("Enter SGPA To Be Converted To Percentage");
                    textfrom.setText("Enter SGPA::");
                    textto.setText("Percentage::");
                    inputtext.setText(null);
                    result.setText(null);
                    final String sgpain = inputtext.getText().toString();

                    if(sgpain.isEmpty()){
                        Toast.makeText(getApplicationContext(),"SGPA cannot be empty",Toast.LENGTH_SHORT).show();
                        result.setText(null);
                        //sgpa.setText(null);
                    }



                    else if(Float.parseFloat(sgpain)> 10){
                        Toast.makeText(getApplicationContext(),"SGPA cannot exceed 10",Toast.LENGTH_SHORT).show();
                        result.setText(null);
                        inputtext.setText(null);
                    }
                    else{
                        float sgpainp=Float.parseFloat(sgpain);
                        double percresult;
                        percresult = (sgpainp-0.75)*10;
                        result.setText(String.valueOf(percresult));
                        Toast.makeText(getApplicationContext(),"Result is ready",Toast.LENGTH_SHORT).show();

                    }
                }

                else {

                    heading.setText("Enter Percentage To Be Converted To SGPA");
                    textfrom.setText("Enter Percentage::");
                    textto.setText("SGPA::");
                    inputtext.setText(null);
                    result.setText(null);

                    final String pcinput;
                    pcinput = inputtext.getText().toString();

                    if(pcinput.isEmpty()){
                        Toast.makeText(getApplicationContext(),"Percentage cannot be empty!!",Toast.LENGTH_SHORT).show();
                        result.setText(null);
                    }
                    else if(Float.parseFloat(pcinput) > 100){
                        Toast.makeText(getApplicationContext(),"Percentage cannot exceed 100!!",Toast.LENGTH_SHORT).show();
                        result.setText(null);
                        inputtext.setText(null);
                    }
                    else {
                        float pcin;
                        pcin = Float.parseFloat(pcinput);
                        double calcresult;
                        calcresult = ((pcin/10)+0.75);
                        result.setText(String.valueOf(calcresult));
                        Toast.makeText(getApplicationContext(),"Result is ready",Toast.LENGTH_SHORT).show();
                    }
                }

            }
        });

    }
}
