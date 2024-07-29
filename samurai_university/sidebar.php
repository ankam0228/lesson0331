          <!-- sidebar-main に切り出す -->
          <div class="sidebar">
            <div class="category">
              <div class="section_title_container category_title">
                <h2>CATEGORY</h2>
                <div class="section_subtitle">カテゴリー</div>
              </div>
              <div class="sidebar_categories">
                <ul>
                  <?php
                    $args = array(
                      'hide_empty' => 1,
                      'title_li' => '',
                    );
                    wp_list_categories($args);
                  ?>
                </ul>
              </div>
            </div>
            <div class="category">
              <div class="section_title_container category_title">
                <h2>Latest Post</h2>
                <div class="section_subtitle">最新記事</div>
              </div>
              <div class="sidebar_categories">
                <ul>
                  <?php
                  $args =array(
                    'posts_per_page' => 3
                  );
                  $posts = get_posts($args);
                  foreach ($posts as $post):
                    setup_postdate($post);
                  ?>
                  <li>
                  <?php
                    endforeach;
                    wp_reset_postdate();
                  ?>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- sidebar-main ここまで -->
