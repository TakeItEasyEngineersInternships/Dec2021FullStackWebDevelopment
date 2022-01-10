function GradePointCalc(sub) {
  if (sub >= 90) {
    return 10;
  } else if (sub < 90 && sub >= 80) {
    return 9;
  } else if (sub < 80 && sub >= 70) {
    return 8;
  } else if (sub < 70 && sub >= 60) {
    return 7;
  } else if (sub < 60 && sub >= 50) {
    return 6;
  } else if (sub < 50 && sub >= 45) {
    return 5;
  } else if (sub < 45 && sub >= 40) {
    return 4;
  } else {
    return 0;
  }
}

export function calculateSgpa(
  sub1,
  cred1,
  sub2,
  cred2,
  sub3,
  cred3,
  sub4,
  cred4,
  sub5,
  cred5,
  sub6,
  cred6,
  sub7,
  cred7,
  sub8,
  cred8
) {
  const sum =
    (GradePointCalc(sub1) * cred1) +
    (GradePointCalc(sub2) * cred2) +
    (GradePointCalc(sub3) * cred3) +
    (GradePointCalc(sub4) * cred4) +
    (GradePointCalc(sub5) * cred5) +
    (GradePointCalc(sub6) * cred6) +
    (GradePointCalc(sub7) * cred7) +
    (GradePointCalc(sub8) * cred8);

 const totalCredit = cred1+cred2+cred3+cred4+cred5+cred6+cred7+cred8;

 return sum/totalCredit;
}

export function calculateSgpa9(
  sub1,
  cred1,
  sub2,
  cred2,
  sub3,
  cred3,
  sub4,
  cred4,
  sub5,
  cred5,
  sub6,
  cred6,
  sub7,
  cred7,
  sub8,
  cred8,
  sub9,
  cred9
) {
  const sum =
    (GradePointCalc(sub1) * cred1) +
    (GradePointCalc(sub2) * cred2) +
    (GradePointCalc(sub3) * cred3) +
    (GradePointCalc(sub4) * cred4) +
    (GradePointCalc(sub5) * cred5) +
    (GradePointCalc(sub6) * cred6) +
    (GradePointCalc(sub7) * cred7) +
    (GradePointCalc(sub8) * cred8) +
    (GradePointCalc(sub9) * cred9);


 const totalCredit = cred1+cred2+cred3+cred4+cred5+cred6+cred7+cred8+cred9;

 return sum/totalCredit;
}

export function cgpacalc(res){
   
   var sum = 0;
   var count = 0;
   for(let i=0;i<res.length;i++){
      if(res[i]!=="0") count++; 
      sum+=Number(res[i]);
   }

   console.log(count);
    

   return sum/count;
}


