<?php
namespace Deployer;

require 'recipe/typo3.php';

/**
 * Hosts
 */
import('.hosts.yaml');

/**
 * Config
 */
set('typo3_webroot', 'public');
//set('repository', 'git@github.com:die-netwerker/metzgerwirt-zillertal.at.git');
set('keep_releases', '3');
set('writable_mode', 'chmod');

set('bin/typo3', '{{release_path}}/vendor/bin/typo3');

add('shared_files', ['.env']);

/**
 * TYPO3 tasks
 */
desc('Flush all caches');
task('typo3:cache_flush', function () {
    run('{{bin/typo3}} cache:flush');
});
desc('Warm up caches');
task('typo3:cache_warmup', function () {
    run('{{bin/typo3}} cache:warmup');
});
desc('Set up all installed extensions');
task('typo3:extension_setup', function () {
    run('{{bin/typo3}} extension:setup');
});
desc('Fix folder structure');
task('typo3:fix_folder_structure', function () {
    run('{{bin/typo3}} install:fixfolderstructure');
});
desc('Update language files');
task('typo3:language_update', function () {
    run('{{bin/typo3}} language:update');
});
desc('Update database schema');
task('typo3:update_database', function () {
    run("{{bin/typo3}} database:updateschema '*.add,*.change'");
});
desc('Execute upgrade wizards');
task('typo3:upgrade_all', function () {
    run('{{bin/typo3}} upgrade:run');
});
desc('Execute update referenceindex');
task('typo3:update_referenceindex', function () {
    run('{{bin/typo3}} referenceindex:update');
});
/**
 * Deployment
 */
desc('Deploys your project');
task('deploy', [
    'deploy:prepare',
    'deploy:vendors',
    /*'typo3:fix_folder_structure',
    'typo3:language_update',*/
    'deploy:symlink',
    /*'typo3:extension_setup',
    'typo3:update_database',
    'typo3:upgrade_all',
    'typo3:cache_flush',
    'typo3:cache_warmup',
    'typo3:update_referenceindex',*/
    'deploy:unlock',
    'deploy:cleanup',
    'deploy:success',
]);

/**
 * Hooks
 */
after('deploy:failed', 'deploy:unlock');