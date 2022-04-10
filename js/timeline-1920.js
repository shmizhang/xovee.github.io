(function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
          
        const docs_json = '{"8a0fb8c4-4bb2-46c6-b111-ff91b9b6e29d":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"size":{"value":10},"x":{"field":"date"},"y":{"field":"citation"}},"id":"1035","type":"Circle"},{"attributes":{"dimensions":"width"},"id":"1023","type":"PanTool"},{"attributes":{"dimensions":"width"},"id":"1024","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"field":"citation"}},"id":"1043","type":"Segment"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"field":"citation"}},"id":"1041","type":"Segment"},{"attributes":{"coordinates":null,"data_source":{"id":"1002"},"glyph":{"id":"1034"},"group":null,"hover_glyph":{"id":"1039"},"level":"annotation","muted_glyph":{"id":"1036"},"nonselection_glyph":{"id":"1035"},"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{},"id":"1066","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"gray"},"line_dash":{"value":"dashed"},"line_width":{"value":1.3},"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"value":51.6}},"id":"1048","type":"Segment"},{"attributes":{"source":{"id":"1002"}},"id":"1045","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"field":"citation"}},"id":"1042","type":"Segment"},{"attributes":{},"id":"1072","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1002"},"glyph":{"id":"1041"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1043"},"nonselection_glyph":{"id":"1042"},"view":{"id":"1045"}},"id":"1044","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1003"}},"id":"1051","type":"CDSView"},{"attributes":{},"id":"1067","type":"AllLabels"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"gray"},"line_dash":{"value":"dashed"},"line_width":{"value":1.3},"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"value":51.6}},"id":"1049","type":"Segment"},{"attributes":{},"id":"1073","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1047"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1049"},"nonselection_glyph":{"id":"1048"},"view":{"id":"1051"}},"id":"1050","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":" # citations","text_alpha":0.5,"text_color":"black","text_font_size":"12px","x":0,"x_units":"screen","y":5,"y_units":"screen"},"id":"1059","type":"Label"},{"attributes":{"callback":null,"renderers":[{"id":"1050"}],"show_arrow":false,"tooltips":"\\n    &lt;div&gt;\\n        &lt;span&gt;&lt;b&gt;@role&lt;/b&gt;&lt;/span&gt;&lt;br&gt;\\n        &lt;span&gt;@affiliation&lt;/span&gt;&lt;br&gt;\\n        &lt;span&gt;@duration&lt;/span&gt;&lt;address&gt;@address&lt;/address&gt;\\n    &lt;/div&gt;\\n\\n"},"id":"1061","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; Primary School","text_color":"gray","text_font_size":"12px","x":1030838400000.0,"y":200,"y_units":"screen"},"id":"1053","type":"Label"},{"attributes":{},"id":"1069","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; High School","text_color":"gray","text_font_size":"12px","x":1314835200000.0,"y":200,"y_units":"screen"},"id":"1055","type":"Label"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; Bachelor","text_color":"gray","text_font_size":"12px","x":1409529600000.0,"y":200,"y_units":"screen"},"id":"1056","type":"Label"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; PhD Student","text_color":"gray","text_font_size":"12px","x":1630454400000.0,"y":200,"y_units":"screen"},"id":"1058","type":"Label"},{"attributes":{"data":{"address":["Zizhou, Shaanxi, China","Zizhou, Shaanxi, China","Zizhou, Shaanxi, China","Yulin, Shaanxi, China","Chengdu, Sichuan, China","Chengdu, Sichuan, China","Chengdu, Sichuan, China"],"affiliation":["Home","Zizhou Experimental Primary School","Zizhou No.2 Middle School","Yulin High School","University of Electronic Science and Technology of China (UESTC)","University of Electronic Science and Technology of China (UESTC)","University of Electronic Science and Technology of China (UESTC)"],"date":[826588800000.0,1030838400000.0,1220227200000.0,1314835200000.0,1409529600000.0,1535760000000.0,1630454400000.0],"duration":["1996-2002","2002-2008","2008-2011","2011-2014","2014-2018","2018-2021","2021-"],"role":["Born","Primary School","Middle School","High School","Bachelor","Master","PhD Student"]},"selected":{"id":"1073"},"selection_policy":{"id":"1072"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; Master","text_color":"gray","text_font_size":"12px","x":1535760000000.0,"y":200,"y_units":"screen"},"id":"1057","type":"Label"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"green"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"size":{"value":10},"x":{"field":"date"},"y":{"field":"citation"}},"id":"1036","type":"Circle"},{"attributes":{"fill_color":{"value":"green"},"size":{"value":30}},"id":"1039","type":"Circle"},{"attributes":{"callback":null,"renderers":[{"id":"1037"}],"show_arrow":false,"tooltips":"\\n    &lt;div&gt;\\n        &lt;span style=&#x27;font-size: 12px; font-weight: bold;&#x27;&gt;@title&lt;/span&gt;&lt;br&gt;\\n        &lt;span&gt;@author&lt;/span&gt;&lt;br&gt;\\n        &lt;span style=&#x27;display: inline-block;&#x27;&gt;@venue&lt;/span&gt;\\n        &lt;span style=&#x27;float: right;&#x27;&gt;Citation: @citation&lt;/span&gt;\\n        &lt;div style=&#x27;clear: both; margin-bottom: 3px;&#x27;&gt;&lt;/div&gt;\\n    &lt;/div&gt;\\n"},"id":"1060","type":"HoverTool"},{"attributes":{"data":{"author":["Ting Zhong, Haoyang Yu, Rongfan Li, &lt;b&gt;Xovee Xu&lt;/b&gt;*, Xucheng Luo, and Fan Zhou","Liu Yu, &lt;b&gt;Xovee Xu&lt;/b&gt;, Ting Zhong, Goce Trajcevski, and Fan Zhou*","Guanyu Wang, &lt;b&gt;Xovee Xu&lt;/b&gt;, Ting Zhong*, and Fan Zhou","Haoyang Yu, &lt;b&gt;Xovee Xu&lt;/b&gt;, Ting Zhong, and Fan Zhou*","Zhiyuan Wang, &lt;b&gt;Xovee Xu&lt;/b&gt;, Goce Trajcevski, Kunpeng Zhang, Ting Zhong, and Fan Zhou*","&lt;b&gt;Xovee Xu&lt;/b&gt;, Fan Zhou*, Kunpeng Zhang, and Siyuan Liu","&lt;b&gt;Xovee Xu&lt;/b&gt;, Ting Zhong, Ce Li, Goce Trajcevski, and Fan Zhou*","Fan Zhou, Pengyu Wang, &lt;b&gt;Xovee Xu&lt;/b&gt;*, Wenxin Tai, and Goce Trajcevski","Fan Zhou, Ce Li, &lt;b&gt;Xovee Xu&lt;/b&gt;, Leyuan Liu*, and Goce Trajcevski","&lt;b&gt;Xovee Xu&lt;/b&gt;, Fan Zhou*, Kunpeng Zhang, Siyuan Liu, and Goce Trajcevski","Guanyu Wang, Ting Zhong, &lt;b&gt;Xovee Xu&lt;/b&gt;, Kunpeng Zhang, Fan Zhou*, and Yong Wang","Fan Zhou, Liu Yu, &lt;b&gt;Xovee Xu&lt;/b&gt;*, and Goce Trajcevski","Fan Zhou, &lt;b&gt;Xovee Xu&lt;/b&gt;*, Goce Trajcevski, and Kunpeng Zhang","Fan Zhou, Xin Jing, &lt;b&gt;Xovee Xu&lt;/b&gt;, Ting Zhong, Goce Trajcevski, and Jin Wu*","Fan Zhou, Zijing Wen, Ting Zhong*, Goce Trajcevski, &lt;b&gt;Xovee Xu&lt;/b&gt;, and Leyuan Liu*","Fan Zhou, Xiuxiu Qi, &lt;b&gt;Xovee Xu&lt;/b&gt;, Jiahao Wang*, Ting Zhong, and Goce Trajcevski","Fan Zhou, &lt;b&gt;Xovee Xu&lt;/b&gt;, Ce Li, Goce Trajcevski, Ting Zhong, and Kunpeng Zhang","Fan Zhou, &lt;b&gt;Xovee Xu&lt;/b&gt;, Kunpeng Zhang, Goce Trajcevski, and Ting Zhong*"],"citation":[0,0,0,0,0,0,0,1,0,2,0,2,43,5,3,0,6,16],"date":[1653177600000.0,1645488000000.0,1645488000000.0,1645488000000.0,1645488000000.0,1626739200000.0,1643673600000.0,1643673600000.0,1638835200000.0,1635724800000.0,1635206400000.0,1625961600000.0,1614556800000.0,1607299200000.0,1607299200000.0,1607299200000.0,1585180800000.0,1593993600000.0],"title":["Probabilistic Fine-Grained Urban Flow Inference With Normalizing Flows","Linking Transformer to Hawkes Process for Information Cascade Prediction (Student Abstract)","Conditional Collaborative Filtering Process for Top-K Recommender System (Student Abstract)","Fine-Grained Urban Flow Inference via Normalizing Flows (Student Abstract)","PrEF: Probabilistic Electricity Forecasting via Copula-Augmented State Space Model","CCGL: Contrastive Cascade Graph Learning","Heterogeneous Dynamical Academic Network for Learning Scientific Impact Propagation","Contrastive Trajectory Learning for Tour Recommendation","HGENA: A Hyperbolic Graph Embedding Approach for Network Alignment","CasFlow: Exploring Hierarchical Structures and Propagation Uncertainty for Cascade Prediction","Vector-Quantized Autoencoder With Copula for Collaborative Filtering","Decoupling Representation and Regressor for Long-Tailed Information Cascade Prediction","A Survey of Information Cascade Analysis: Models, Predictions, and Recent Advances","Continual Information Cascade Learning","Unsupervised User Identity Linkage via Graph Neural Networks","Meta-Learned User Preference for Topic Participation Prediction","A Heterogeneous Dynamical Graph Neural Networks Approach to Quantify Scientific Impact","Variational Information Diffusion for Probabilistic Cascades Prediction"],"venue":["ICASSP 22","AAAI Student Abs. 22","AAAI Student Abs. 22","AAAI Student Abs. 22","AAAI 22","TKDE 22","KBS 22","ACM TIST","GLOBECOM 21","TKDE 21","CIKM 21","SIGIR 21","CSUR 21","GLOBECOM 20","GLOEBCOM 20","GLOBECOM 20","arXiv 20","INFOCOM 20"]},"selected":{"id":"1071"},"selection_policy":{"id":"1070"}},"id":"1002","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1015"},"coordinates":null,"group":null,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"fill_color":{"value":"green"},"line_color":{"value":"white"},"size":{"value":10},"x":{"field":"date"},"y":{"field":"citation"}},"id":"1034","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; Born","text_color":"gray","text_font_size":"12px","x":826588800000.0,"y":200,"y_units":"screen"},"id":"1052","type":"Label"},{"attributes":{"line_color":{"value":"gray"},"line_dash":{"value":"dashed"},"line_width":{"value":1.3},"x0":{"field":"date"},"x1":{"field":"date"},"y0":{"value":0},"y1":{"value":51.6}},"id":"1047","type":"Segment"},{"attributes":{"source":{"id":"1002"}},"id":"1038","type":"CDSView"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"1074","type":"AdaptiveTicker"},{"attributes":{"background_fill_color":null,"below":[{"id":"1015"}],"border_fill_color":null,"center":[{"id":"1018"},{"id":"1022"},{"id":"1052"},{"id":"1053"},{"id":"1054"},{"id":"1055"},{"id":"1056"},{"id":"1057"},{"id":"1058"},{"id":"1059"}],"height":270,"left":[{"id":"1019"}],"outline_line_width":0,"renderers":[{"id":"1037"},{"id":"1044"},{"id":"1050"}],"sizing_mode":"stretch_width","title":{"id":"1005"},"toolbar":{"id":"1026"},"toolbar_location":null,"width":1080,"x_range":{"id":"1007"},"x_scale":{"id":"1011"},"y_range":{"id":"1009"},"y_scale":{"id":"1013"}},"id":"1004","subtype":"Figure","type":"Plot"},{"attributes":{"active_scroll":{"id":"1024"},"logo":null,"tools":[{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1060"},{"id":"1061"}]},"id":"1026","type":"Toolbar"},{"attributes":{},"id":"1070","type":"UnionRenderers"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"1075","type":"AdaptiveTicker"},{"attributes":{"months":["%b %Y"]},"id":"1031","type":"DatetimeTickFormatter"},{"attributes":{"days":[1,8,15,22]},"id":"1079","type":"DaysTicker"},{"attributes":{"coordinates":null,"formatter":{"id":"1031"},"group":null,"major_label_policy":{"id":"1069"},"major_tick_line_color":"silver","ticker":{"id":"1016"}},"id":"1015","type":"DatetimeAxis"},{"attributes":{"end":1719705600000.0,"start":1377993600000.0},"id":"1007","type":"Range1d"},{"attributes":{},"id":"1071","type":"Selection"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"1076","type":"AdaptiveTicker"},{"attributes":{},"id":"1085","type":"YearsTicker"},{"attributes":{"end":51.6},"id":"1009","type":"Range1d"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"1078","type":"DaysTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"1074"},{"id":"1075"},{"id":"1076"},{"id":"1077"},{"id":"1078"},{"id":"1079"},{"id":"1080"},{"id":"1081"},{"id":"1082"},{"id":"1083"},{"id":"1084"},{"id":"1085"}]},"id":"1016","type":"DatetimeTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"1077","type":"DaysTicker"},{"attributes":{"coordinates":null,"group":null,"text":"Xovee&#x27;s Timeline"},"id":"1005","type":"Title"},{"attributes":{"months":[0,6]},"id":"1084","type":"MonthsTicker"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"days":[1,15]},"id":"1080","type":"DaysTicker"},{"attributes":{"coordinates":null,"group":null,"text":" &gt; Middle School","text_color":"gray","text_font_size":"12px","x":1220227200000.0,"y":200,"y_units":"screen"},"id":"1054","type":"Label"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"1081","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"1082","type":"MonthsTicker"},{"attributes":{},"id":"1013","type":"LinearScale"},{"attributes":{"axis":{"id":"1019"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1022","type":"Grid"},{"attributes":{"months":[0,4,8]},"id":"1083","type":"MonthsTicker"},{"attributes":{"axis_line_color":null,"coordinates":null,"formatter":{"id":"1066"},"group":null,"major_label_policy":{"id":"1067"},"major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"1020"}},"id":"1019","type":"LinearAxis"},{"attributes":{},"id":"1020","type":"BasicTicker"}],"root_ids":["1004"]},"title":"Bokeh Application","version":"2.4.2"}}';
        const render_items = [{"docid":"8a0fb8c4-4bb2-46c6-b111-ff91b9b6e29d","root_ids":["1004"],"roots":{"1004":"43149920-0cab-4c96-a113-c0e1eb528508"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
      
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          let attempts = 0;
          const timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();