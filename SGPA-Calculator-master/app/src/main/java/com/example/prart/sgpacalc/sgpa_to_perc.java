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

public class sgpa_to_perc extends AppCompatActivity {

    private EditText sgpa;
    private TextView resultpc;
    private Button converttopc;
    private Switch invert;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sgpa_to_perc);
        converttopc = findViewById(R.id.buttonconverttopc);
        resultpc = findViewById(R.id.textViewresultpc);
        sgpa = findViewById(R.id.editTextsgpa);
        invert = findViewById(R.id.switchinvert);

        converttopc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String per = sgpa.getText().toString();
                if(per.isEmpty()){
                    Toast.makeText(getApplicationContext(),"SGPA cannot be empty",Toast.LENGTH_SHORT).show();
                    resultpc.setText(null);
                    //sgpa.setText(null);
                }
                else if(Float.parseFloat(per)> 10){
                    Toast.makeText(getApplicationContext(),"SGPA cannot exceed 10",Toast.LENGTH_SHORT).show();
                    resultpc.setText(null);
                    sgpa.setText(null);
                }
                else{
                    float sgpain=Float.parseFloat(per);
                    double percresult;
                    percresult = (sgpain-0.75)*10;
                    resultpc.setText(String.valueOf(percresult));
                    Toast.makeText(getApplicationContext(),"Result is ready",Toast.LENGTH_SHORT).show();

                }
            }
        });

        invert.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                Intent invertlayout;
                invertlayout = new Intent(getApplicationContext(),perc_to_sgpa.class);
                startActivity(invertlayout);
            }
        });

    }
}
