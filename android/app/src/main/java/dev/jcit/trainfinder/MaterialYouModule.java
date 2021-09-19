package dev.jcit.trainfinder;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MaterialYouModule extends ReactContextBaseJavaModule {
  public MaterialYouModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MaterialYouModule";
  }

  @ReactMethod
  public void getColours(final Promise promise) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
      HashMap<String, List<String>> colours = new HashMap<String, List<String>>();

      ArrayList<String> accent1 = new ArrayList<String>() {{
        add(colourToHex(R.color.system_accent1_0));
        add(colourToHex(R.color.system_accent1_10));
        add(colourToHex(R.color.system_accent1_50));
        add(colourToHex(R.color.system_accent1_100));
        add(colourToHex(R.color.system_accent1_200));
        add(colourToHex(R.color.system_accent1_300));
        add(colourToHex(R.color.system_accent1_400));
        add(colourToHex(R.color.system_accent1_500));
        add(colourToHex(R.color.system_accent1_600));
        add(colourToHex(R.color.system_accent1_700));
        add(colourToHex(R.color.system_accent1_800));
        add(colourToHex(R.color.system_accent1_900));
        add(colourToHex(R.color.system_accent1_1000));
      }};

      ArrayList<String> accent2 = new ArrayList<String>() {{
        add(colourToHex(R.color.system_accent2_0));
        add(colourToHex(R.color.system_accent2_10));
        add(colourToHex(R.color.system_accent2_50));
        add(colourToHex(R.color.system_accent2_100));
        add(colourToHex(R.color.system_accent2_200));
        add(colourToHex(R.color.system_accent2_300));
        add(colourToHex(R.color.system_accent2_400));
        add(colourToHex(R.color.system_accent2_500));
        add(colourToHex(R.color.system_accent2_600));
        add(colourToHex(R.color.system_accent2_700));
        add(colourToHex(R.color.system_accent2_800));
        add(colourToHex(R.color.system_accent2_900));
        add(colourToHex(R.color.system_accent2_1000));
      }};

      ArrayList<String> accent3 = new ArrayList<String>() {{
        add(colourToHex(R.color.system_accent3_0));
        add(colourToHex(R.color.system_accent3_10));
        add(colourToHex(R.color.system_accent3_50));
        add(colourToHex(R.color.system_accent3_100));
        add(colourToHex(R.color.system_accent3_200));
        add(colourToHex(R.color.system_accent3_300));
        add(colourToHex(R.color.system_accent3_400));
        add(colourToHex(R.color.system_accent3_500));
        add(colourToHex(R.color.system_accent3_600));
        add(colourToHex(R.color.system_accent3_700));
        add(colourToHex(R.color.system_accent3_800));
        add(colourToHex(R.color.system_accent3_900));
        add(colourToHex(R.color.system_accent3_1000));
      }};

      ArrayList<String> neutral1 = new ArrayList<String>() {{
        add(colourToHex(R.color.system_neutral1_0));
        add(colourToHex(R.color.system_neutral1_10));
        add(colourToHex(R.color.system_neutral1_50));
        add(colourToHex(R.color.system_neutral1_100));
        add(colourToHex(R.color.system_neutral1_200));
        add(colourToHex(R.color.system_neutral1_300));
        add(colourToHex(R.color.system_neutral1_400));
        add(colourToHex(R.color.system_neutral1_500));
        add(colourToHex(R.color.system_neutral1_600));
        add(colourToHex(R.color.system_neutral1_700));
        add(colourToHex(R.color.system_neutral1_800));
        add(colourToHex(R.color.system_neutral1_900));
        add(colourToHex(R.color.system_neutral1_1000));
      }};

      ArrayList<String> neutral2 = new ArrayList<String>() {{
        add(colourToHex(R.color.system_neutral2_0));
        add(colourToHex(R.color.system_neutral2_10));
        add(colourToHex(R.color.system_neutral2_50));
        add(colourToHex(R.color.system_neutral2_100));
        add(colourToHex(R.color.system_neutral2_200));
        add(colourToHex(R.color.system_neutral2_300));
        add(colourToHex(R.color.system_neutral2_400));
        add(colourToHex(R.color.system_neutral2_500));
        add(colourToHex(R.color.system_neutral2_600));
        add(colourToHex(R.color.system_neutral2_700));
        add(colourToHex(R.color.system_neutral2_800));
        add(colourToHex(R.color.system_neutral2_900));
        add(colourToHex(R.color.system_neutral2_1000));
      }};

      colours.put("accent1", accent1);
      colours.put("accent2", accent2);
      colours.put("accent3", accent3);
      colours.put("neutral1", neutral1);
      colours.put("neutral2", neutral2);

      WritableMap map = new WritableNativeMap();
      for (Map.Entry<String, List<String>> entry : colours.entrySet()) {
        WritableArray array = new WritableNativeArray();
        for (String item : entry.getValue()) {
          array.pushString(item);
        }

        map.putArray(entry.getKey(), array);
      }
      promise.resolve(map);
    } else {
      promise.reject("fail", "API unsupported");
    }
  }
  
  @RequiresApi(api = Build.VERSION_CODES.M)
  private String colourToHex(int c) {
    int col = getReactApplicationContext().getColor(c);
    return String.format("#%06X", (0xFFFFFF & col));
  }
}