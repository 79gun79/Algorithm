import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] w = new int[2 * n];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < 2 * n; i++) {
            w[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(w);
        int mn = 200000;
        for (int i = 0; i < n; i++) {
            mn = Math.min(mn, w[i] + w[2 * n - i - 1]);
        }

        System.out.println(mn);
    }
}