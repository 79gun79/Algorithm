import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine().trim();
        int i = 0;
        StringBuilder res = new StringBuilder();

        while (i < s.length()) {
            if (s.charAt(i) == '.') {
                i += 1;
                res.append(".");
            }
            else {
                if (i + 4 <= s.length() && s.substring(i, i+4).equals("XXXX")) {
                    i += 4;
                    res.append("AAAA");
                }
                else if (i + 2 <= s.length() && s.substring(i, i+2).equals("XX")) {
                    i += 2;
                    res.append("BB");
                }
                else {
                    res = new StringBuilder("-1");
                    break;
                }
            }
        }
        System.out.println(res.toString());
    }
}