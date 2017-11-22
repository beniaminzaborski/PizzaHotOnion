namespace PizzaHotOnion.Configuration
{
    public class Settings
    {
        public string ConnectionString;
        public string Database;

        public string MailServer { get; set; }

        public int MailPort { get; set; }

        public string MailSender { get; set; }

        public string MailUser { get; set; }

        public string MailPasswd  { get; set; }
    }
}