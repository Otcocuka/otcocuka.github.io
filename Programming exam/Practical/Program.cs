using System;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.IO;
using SQLite;

namespace Practical
{
    class Program
    {
        private static readonly string sqliteConnectionString = @"Logs.db";

        private static string GetData(string uri)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            request.ContentType = @"application/json;charset=""utf-8""";
            request.Method = "GET";
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            using (StreamReader reader = new StreamReader(response.GetResponseStream()))
            {
                return reader.ReadToEnd();
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Sending request...");
            string data = GetData("http://www.dsdev.tech/logs/20210103");
            Console.WriteLine("Done.\nParsing response...");
            LogSort logs = new LogSort();
            logs = JsonSerializer.Deserialize<LogSort>(data, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            Console.WriteLine("Done.\nStarting sort...");
            logs.Sort();
            Console.WriteLine("Done\nInserting into db...");
            SQLiteConnection db = new SQLiteConnection(sqliteConnectionString, false);
            db.InsertAll(logs.Logs);
            db.Close();
            Console.WriteLine("Done.\nProgram Finished.\nPress Enter to exit");
            _ = Console.ReadLine();
            return;
        }
    }
    class LogSort
    {
        public string Error { get; set; }
        public IList<Logs> Logs { get; set; }
        private IList<Logs> Sort(IList<Logs> logs, int minIndex, int maxIndex)
        {
            if (minIndex >= maxIndex)
                return logs;
            var pivotIndex = Split(logs, minIndex, maxIndex);
            Sort(logs, minIndex, pivotIndex - 1);
            Sort(logs, pivotIndex + 1, maxIndex);

            return logs;
        }
        private int Split(IList<Logs> logs, int minIndex, int maxIndex)
        {
            var pivot = minIndex - 1;
            for (var m = minIndex; m < maxIndex; m++)
            {
                if (logs[m].Created_at.Ticks < logs[maxIndex].Created_at.Ticks)
                {
                    pivot++;
                    Swap(pivot, m);
                }
            }
            pivot++;
            Swap(pivot, maxIndex);
            return pivot;
        }
        private void Swap(int x, int y)
        {
            var temp = this.Logs[x];
            this.Logs[x] = this.Logs[y];
            this.Logs[y] = temp;
        }
        public void Sort()
        {
            this.Logs = Sort(this.Logs, 0, this.Logs.Count - 1);
        }
    }
    public class Logs
    {
        public DateTime Created_at { get; set; }
        public string First_name { get; set; }
        public string Message { get; set; }
        public string Second_name { get; set; }
        public string User_id { get; set; }
    }
}

