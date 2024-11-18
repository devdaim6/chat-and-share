module.exports = {
  apps: [
    {
      name: 'chat-and-share',
      cwd: './',
      script:'npm',
      args: 'start',
      instances: '1', // or a number like 2
      exec_mode: 'fork',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        // Add other environment variables here
        DATABASE_URL: 'mongodb+srv://private-chat:HQt0mCUnxxnHrf9Q@cluster0.du2pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
      },

      // Ensure proper memory allocation
      node_args: '--max_old_space_size=4096',

      // Error handling
      max_memory_restart: '1G',
  
     // Logs Configuration
      out_file: 'logs/out.log',        // Standard output log
      error_file: 'logs/error.log',    // Error log
      merge_logs: true,                // Merge all logs into a single file
      time: true,                      // Add timestamp to each log entry
      
      // Rotate logs when they grow too large (optional)
      log_date_format: 'YYYY-MM-DD HH:mm Z',  // Timestamp format for logs
      log_type: 'json',                       // Format the logs in JSON for easy parsing
      
      // Log rotation settings
      max_size: '10M',                    // Maximum log file size (10 MB)
      keep_files: 5,                      // Keep the last 5 rotated logs
      rotate_interval: '1d',              // Rotate logs daily
      compress: true,                     // Compress rotated log files

      // Custom log levels for filtering (info, debug, warn, error)
      // Logs with levels can be controlled via environment variables or manual configuration
      error_file: 'logs/error.log',  // Logs all errors
      out_file: 'logs/out.log',      // Logs standard output (info, debug, etc.)
      
      // Log retention and management
      merge_logs: true,               // Merges all logs from instances into a single file
      time: true,                     // Include time in each log entry
    },
  ],
};
