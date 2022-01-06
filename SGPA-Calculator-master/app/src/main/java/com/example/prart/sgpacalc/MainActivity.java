package com.example.prart.sgpacalc;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.Toast;

/*CREATED BY ASHISH ON 01-10-2019*/

public class MainActivity extends AppCompatActivity {
    Button buttonlaunch;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        String choices[] = {"Percentage to SGPA","SGPA to Percentage"};
        final Spinner spinner = findViewById(R.id.spinnerselect);
        ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>(this,   android.R.layout.simple_spinner_item, choices);
        spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item); // The drop down view
        spinner.setAdapter(spinnerArrayAdapter);

        buttonlaunch = findViewById(R.id.buttonlaunch);

        buttonlaunch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String selecteditem;
                selecteditem = spinner.getSelectedItem().toString();
                switch (selecteditem)
                {
                    case "Percentage to SGPA":
                        Intent intent;
                        intent = new Intent(getApplicationContext(),perc_to_sgpa.class);
                        startActivity(intent);
                        break;

                    case "SGPA to Percentage":
                        Intent intent1 = new Intent(getApplicationContext(),sgpa_to_perc.class);
                        startActivity(intent1);
                        break;
                     //default:
                    //     Toast.makeText(getApplicationContext(),"Default",Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
