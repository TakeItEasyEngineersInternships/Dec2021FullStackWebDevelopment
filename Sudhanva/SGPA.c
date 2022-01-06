#include<stdio.h>
int main()
{
int n,sub;
float total,gp=0,SGPA,tSGPA=0,SGPA1,SGPA2;
printf("enter the number of semesters\n");
scanf("%d",&n);
for(int i=1;i<n+1;i++)
 {
  printf("enter the number of subjects in semester %d\n",i);
  scanf("%d",&sub);
  for(int j=1;j<sub+1;j++)
  {
      printf("enter the grade points for subject %d\n",j);
      scanf("%f",&gp);
      total=total+gp;
      printf("%f\n",total);
  }
  SGPA=total/sub;
  printf("%f\n",total);
  printf("SGPA for semester %d is %f\n",i,SGPA);
  total=0;
  tSGPA=tSGPA+SGPA;

 }
 printf("%f\n%f\n",SGPA1,SGPA2);
 float CGPA=tSGPA/n;
 printf("CGPA = %f\n",CGPA);
}
