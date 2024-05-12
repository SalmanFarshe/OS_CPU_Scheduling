#include<stdio.h>

int main()
{
    int number, avg, sum = 0;

    printf("Enter The Amount of Process : ");
    scanf("%d", &number);

    int burst_time[number], waiting_time[number];

    waiting_time[0]=0;

    printf("Enter The Burst Time of each Process : \n");
    for(int i = 0; i < number; i++)
    {
        printf("Burst time For P[%d] = ", i);
        scanf("%d", &burst_time[i]);
    }

    printf("\nThe Burst time is [ ");
    for(int i = 0; i < number; i++)
    {
        if(i == (number - 1))
        {
            printf("%d ", burst_time[i]);
        }
        else
        {
            printf("%d, ", burst_time[i]);
        }
    }
    printf("]\n\n");

    for(int i = 1; i <= number; i++)
    {
        waiting_time[i] = burst_time[i-1] + waiting_time[i-1];
    }

    printf("Gantt Chart\n");
    for (int i = 0; i < number; i++)
    {
        printf("%d", waiting_time[i]);
        for (int j = 1; j <= burst_time[i]; j++)
        {
            printf("-");
        }
    }
    printf("%d", burst_time[number-1]+waiting_time[number-1]);

    printf("\n\nThe Waiting time is [ ");
    for(int i = 0; i < number; i++)
    {
        if(i == (number - 1))
        {
            printf("%d ", waiting_time[i]);
        }
        else
        {
            printf("%d, ", waiting_time[i]);
        }
    }
    printf("]");
    printf("\n");

    for(int i = 0; i < number; i++)
    {
        sum = sum + waiting_time[i];
    }

    avg = sum / number;
    printf("\nAverage waiting time = %d\n\n", avg);
    
    return 0;
}
