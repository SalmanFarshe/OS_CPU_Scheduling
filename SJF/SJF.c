#include<stdio.h>
int main()
{
    int number, temp, temp2;
    printf("Enter The Amount of Process : ");
    scanf("%d", &number);
    int burst_time[number], waiting_time[number], process[number];
    waiting_time[0]=0;
    printf("Enter The Burst Time of each Process : \n");

    for(int i = 0; i < number; i++)
    {
        printf("Burst time For P[%d] = ", i);
        scanf("%d", &burst_time[i]);
    }
    for(int i = 0; i < number; i++)
    {
        process[i]=i;
    }
    for (int i = 0; i < number; i++)
    {
        for (int j = i; j < number-1; j++)
        {
            if (burst_time[i]>=burst_time[j+1])
            {
                temp = burst_time[i];
                burst_time[i] = burst_time[j + 1];
                burst_time[j + 1] = temp;

                temp2 = process[i];
                process[i] = process[j + 1];
                process[j + 1] = temp2;
            }
        }
    }

    printf("\n\nThe Process is [ ");
    for(int i = 0; i < number; i++)
    {
        if(i == (number - 1))
        {
            printf("%d ", process[i]);
        }
        else
        {
            printf("%d, ", process[i]);
        }
    }
    printf("]");

    printf("\n\nThe Burst time is [ ");
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
    printf("]");

    for(int i = 1; i < number; i++)
    {
        waiting_time[i] = burst_time[i-1] + waiting_time[i-1];
    }
    printf("\n\nGantt Chart\n");
    for(int i = 0; i < number; i++)
    {
        for (int j = 1; j <= burst_time[i]/2; j++)
        {
            printf(" ");
        }
        printf("p[%d]", process[i]);
    }
    printf("\n");
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

    int sum = 0;
    for(int i = 0; i < number; i++)
    {
        sum = sum + waiting_time[i];
    }
    int avg;
    avg = sum / number;
    printf("\n\nAverage waiting time = %d\n", avg);
    return 0;
}
